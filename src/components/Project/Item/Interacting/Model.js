/**
 *
 * ProjectSkillForceInteractingModel
 *
 */

import { Input } from 'semantic-ui-react';
import { Map } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';

import { getModel } from '~/containers/App/getters/projectItem';
import ProjectSkillForceFieldFormattedMessage from '../FieldFormattedMessage';

/* eslint-disable react/prefer-stateless-function */
class ProjectSkillForceInteractingModel extends React.PureComponent {
  constructor(props) {
    super(props);

    this.renderInput = this.renderInput.bind(this);
    this.changeValue = evt => {
      const { onChangeValue, item } = this.props;
      onChangeValue(item, evt.target.value);
    };
  }

  renderInput(message) {
    const {
      item,
      itemNextValues,
      className,
      label,
      fluid,
      size,
      withDefaultLabel,
    } = this.props;

    const value = getModel(itemNextValues.get('nextValue'), {
      entry: item,
    });

    const labelProp = label || withDefaultLabel ? label || message : undefined;

    return (
      <Input
        label={labelProp}
        fluid={fluid}
        size={size}
        value={value}
        onChange={this.changeValue}
        className={className}
      />
    );
  }

  render() {
    return (
      <ProjectSkillForceFieldFormattedMessage message="Model">
        {this.renderInput}
      </ProjectSkillForceFieldFormattedMessage>
    );
  }
}

ProjectSkillForceInteractingModel.propTypes = {
  item: PropTypes.instanceOf(Map).isRequired,
  itemNextValues: PropTypes.instanceOf(Map).isRequired,
  onChangeValue: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['mini', 'small', 'large', 'big', 'huge', 'massive']),
  className: PropTypes.string,
  fluid: PropTypes.bool,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.number,
  ]),
  withDefaultLabel: PropTypes.bool,
};

ProjectSkillForceInteractingModel.defaultProps = {
  size: 'mini',
  className: '',
  label: null,
  fluid: true,
  withDefaultLabel: true,
};

export default ProjectSkillForceInteractingModel;
