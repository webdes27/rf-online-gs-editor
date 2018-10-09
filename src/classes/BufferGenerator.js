/*
  eslint-disable no-plusplus,
  no-unneeded-ternary,
  default-case,
  no-fallthrough,
  no-underscore-dangle
*/

import iconv from 'iconv-lite';
import { parseInt } from 'lodash';

class BufferGenerator {
  constructor() {
    this.buffer = Buffer.from([]);
  }

  concat(...buffers) {
    this.buffer = Buffer.concat([this.buffer, ...buffers]);
    return this;
  }

  createBuffer(len = 0) {
    return Buffer.from(Array.from(Array(len)).map(() => 0));
  }

  getBuffer() {
    return this.buffer;
  }

  addInt8(value) {
    const buffer = this.createBuffer(1);
    buffer.writeInt8(parseInt(value), 0);
    return this.concat(buffer);
  }

  addInt16LE(value) {
    const buffer = this.createBuffer(2);
    buffer.writeInt16LE(parseInt(value), 0);
    return this.concat(buffer);
  }

  addInt16BE(value) {
    const buffer = this.createBuffer(2);
    buffer.writeInt16BE(parseInt(value), 0);
    return this.concat(buffer);
  }

  addInt32LE(value) {
    const buffer = this.createBuffer(4);
    buffer.writeInt32LE(parseInt(value), 0);
    return this.concat(buffer);
  }

  addFloatLE(value) {
    const buffer = this.createBuffer(4);
    buffer.writeFloatLE(parseFloat(value), 0);
    return this.concat(buffer);
  }

  addString(string = '', props = {}) {
    const value = typeof string === 'string' ? string : '';
    const len = props.len !== undefined ? props.len : value.length;
    const encode = props.iconv;
    const stringBuffer =
      typeof encode === 'string' && encode
        ? iconv.encode(value.substring(0, len), encode)
        : Buffer.from(value.substring(0, len));
    const buffer = this.createBuffer(len);
    for (let i = 0; i < stringBuffer.length; i++) {
      buffer[i] = stringBuffer[i];
    }
    return this.concat(buffer);
  }

  addHex32(string = '') {
    const value = typeof string === 'string' ? string.substring(0, 8) : '';
    const hexBuffer = Buffer.from(value, 'hex');
    const buffer = this.createBuffer(4);
    for (let i = 0; i < hexBuffer.length; i++) {
      buffer[i] = hexBuffer[i];
    }
    return this.concat(buffer);
  }

  addByField(field, value, props = {}, values = {}) {
    switch (field.getType()) {
      case Number:
        switch (field.getLen(values)) {
          case 8:
            return this.addInt8(value);
          case 16:
            return this.addInt16LE(value);
          case 32:
            switch (field.getAs()) {
              case 'float':
                return this.addFloatLE(value);
              default:
                return this.addInt32LE(value);
            }
        }
      case String:
        switch (field.getLen(values)) {
          case 32:
            if (field.getAs() === 'hex') {
              return this.addHex32(value);
            }
          default:
            return this.addString(value, {
              iconv: 'win1251',
              len: field.getLen(values),
            });
        }
      case Boolean:
        switch (field.getLen(values)) {
          case 8:
            return this.addInt8(value ? 1 : 0);
          case 16:
            return this.addInt8(value ? 1 : 0);
          case 32:
            return this.addInt32LE(value ? 1 : 0);
        }
    }

    // eslint-disable-next-line
    console.error(
      'Undefined field type!',
      'Field:',
      field,
      'StepProps:',
      props,
      'GenProps:',
      props,
    );

    throw new Error(
      `Undefined field type ${typeof field.getType()}: ${field.getLen(values)}`,
    );
  }
}

export default BufferGenerator;