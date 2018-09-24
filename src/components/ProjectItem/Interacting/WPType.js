/**
 *
 * ProjectItemInteractingWPType
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { parseInt, isNumber } from 'lodash';
import { Map, List } from 'immutable';
import { Dropdown } from 'semantic-ui-react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from '../messages';

/* eslint-disable react/prefer-stateless-function */
class ProjectItemInteractingWPType extends React.PureComponent {
  constructor(props) {
    super(props);

    this.changeValue = (evt, owns) => {
      const { onChangeValue, item } = this.props;
      onChangeValue(item, parseInt(owns.value) || 0);
    };
  }

  render() {
    const { item, itemNextValues, types, className } = this.props;

    const nextValue = itemNextValues.getIn(['nextValue', 'server', 'nWPType']);

    const currValue = item.getIn(
      [['server', 'nWPType'], ['client', 'nWPType']].find(
        fieldSets => item.getIn(fieldSets) !== undefined,
      ) || ['server', 'nWPType'],
      0,
    );

    const value = nextValue !== undefined ? nextValue : currValue;
    const type = types.find(val => val.get('value') === value);
    const isUnknown = !type;

    return (
      <Dropdown
        text={
          isUnknown ? (
            <span>
              {isNumber(value) && `${value}: `}
              <FormattedMessage {...messages.UnknownWeaponType} />
            </span>
          ) : (
            `${type.get('value')}: ${type.get('title')}`
          )
        }
        inline
        labeled
        scrolling
        item
        icon="bolt"
        className={className}
      >
        <Dropdown.Menu>
          {isUnknown && (
            <Dropdown.Item
              selected
              text={
                <span>
                  {isNumber(value) && `${value}: `}
                  <FormattedMessage {...messages.UnknownWeaponType} />
                </span>
              }
            />
          )}

          {types.map(val => (
            <Dropdown.Item
              onClick={this.changeValue}
              selected={val.get('value') === value}
              key={val.get('value')}
              value={val.get('value')}
              text={
                <span>
                  {val.get('value')}: {val.get('title')}
                </span>
              }
            />
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

ProjectItemInteractingWPType.propTypes = {
  item: PropTypes.instanceOf(Map).isRequired,
  itemNextValues: PropTypes.instanceOf(Map).isRequired,
  onChangeValue: PropTypes.func.isRequired,
  types: PropTypes.instanceOf(List).isRequired,
  className: PropTypes.string,
};

ProjectItemInteractingWPType.defaultProps = {
  className: '',
};

export default ProjectItemInteractingWPType;
