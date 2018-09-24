/**
 *
 * ProjectItemRowRenderTool
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Map, List } from 'immutable';
import { Grid } from 'semantic-ui-react';

import ProjectItemInteractingName from '../../ProjectItem/Interacting/Name';
import ProjectItemInteractingExchange from '../../ProjectItem/Interacting/Exchange';
import ProjectItemInteractingSell from '../../ProjectItem/Interacting/Sell';
import ProjectItemInteractingGround from '../../ProjectItem/Interacting/Ground';
import ProjectItemInteractingStoragePossible from '../../ProjectItem/Interacting/StoragePossible';
import ProjectItemInteractingMoneyType from '../../ProjectItem/Interacting/MoneyType';
import ProjectItemInteractingMoneyValue from '../../ProjectItem/Interacting/MoneyValue';
import ProjectItemInteractingStoragePrice from '../../ProjectItem/Interacting/StoragePrice';
import ProjectItemInteractingCivilBM from '../../ProjectItem/Interacting/CivilBM';
import ProjectItemInteractingCivilBF from '../../ProjectItem/Interacting/CivilBF';
import ProjectItemInteractingCivilCM from '../../ProjectItem/Interacting/CivilCM';
import ProjectItemInteractingCivilCF from '../../ProjectItem/Interacting/CivilCF';
import ProjectItemInteractingCivilA from '../../ProjectItem/Interacting/CivilA';

/* eslint-disable react/prefer-stateless-function */
class ProjectItemRowRenderTool extends React.PureComponent {
  render() {
    const { item, itemNextValues, actions, moneyTypes } = this.props;

    return (
      <Grid columns={3}>
        <Grid.Column largeScreen={4} widescreen={5}>
          <ProjectItemInteractingName
            item={item}
            itemNextValues={itemNextValues}
            onChangeValue={actions.changeName}
            className="pb-10"
          />
          <Grid columns="equal">
            <Grid.Column>
              <ProjectItemInteractingExchange
                item={item}
                itemNextValues={itemNextValues}
                onChangeValue={actions.changeExchange}
              />
            </Grid.Column>
            <Grid.Column>
              <ProjectItemInteractingSell
                item={item}
                itemNextValues={itemNextValues}
                onChangeValue={actions.changeSell}
              />
            </Grid.Column>
            <Grid.Column only="widescreen">
              <ProjectItemInteractingGround
                item={item}
                itemNextValues={itemNextValues}
                onChangeValue={actions.changeGround}
              />
            </Grid.Column>
            <Grid.Column only="widescreen">
              <ProjectItemInteractingStoragePossible
                item={item}
                itemNextValues={itemNextValues}
                onChangeValue={actions.changeStoragePossible}
              />
            </Grid.Column>
          </Grid>
        </Grid.Column>

        <Grid.Column largeScreen={6} widescreen={7}>
          <ProjectItemInteractingMoneyType
            item={item}
            itemNextValues={itemNextValues}
            onChangeValue={actions.changeMoney}
            types={moneyTypes}
            className="pt-5 pb-10"
          />

          <Grid columns={2}>
            <Grid.Column>
              <ProjectItemInteractingMoneyValue
                item={item}
                itemNextValues={itemNextValues}
                onChangeStdPrice={actions.changeStdPrice}
                onChangeStdPoint={actions.changeStdPoint}
                onChangeGoldPoint={actions.changeGoldPoint}
                onChangeProcPoint={actions.changeProcPoint}
                onChangeKillPoint={actions.changeKillPoint}
                types={moneyTypes}
              />
            </Grid.Column>
            <Grid.Column>
              <ProjectItemInteractingStoragePrice
                item={item}
                itemNextValues={itemNextValues}
                onChangeValue={actions.changeStoragePrice}
                types={moneyTypes}
              />
            </Grid.Column>
          </Grid>
        </Grid.Column>

        <Grid.Column largeScreen={6} widescreen={4}>
          <Grid columns={2}>
            <Grid.Column>
              <ProjectItemInteractingCivilBM
                item={item}
                itemNextValues={itemNextValues}
                onChangeValue={actions.changeCivilBM}
              />
              <ProjectItemInteractingCivilCM
                item={item}
                itemNextValues={itemNextValues}
                onChangeValue={actions.changeCivilCM}
              />
              <ProjectItemInteractingCivilA
                item={item}
                itemNextValues={itemNextValues}
                onChangeValue={actions.changeCivilA}
              />
            </Grid.Column>
            <Grid.Column>
              <ProjectItemInteractingCivilBF
                item={item}
                itemNextValues={itemNextValues}
                onChangeValue={actions.changeCivilBF}
              />

              <ProjectItemInteractingCivilCF
                item={item}
                itemNextValues={itemNextValues}
                onChangeValue={actions.changeCivilCF}
              />
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    );
  }
}

ProjectItemRowRenderTool.propTypes = {
  item: PropTypes.instanceOf(Map).isRequired,
  itemNextValues: PropTypes.instanceOf(Map).isRequired,
  moneyTypes: PropTypes.instanceOf(List).isRequired,
  actions: PropTypes.shape({
    changeName: PropTypes.func.isRequired,
    changeExchange: PropTypes.func.isRequired,
    changeSell: PropTypes.func.isRequired,
    changeGround: PropTypes.func.isRequired,
    changeStoragePossible: PropTypes.func.isRequired,
    changeMoney: PropTypes.func.isRequired,
    changeStdPrice: PropTypes.func.isRequired,
    changeStdPoint: PropTypes.func.isRequired,
    changeGoldPoint: PropTypes.func.isRequired,
    changeProcPoint: PropTypes.func.isRequired,
    changeKillPoint: PropTypes.func.isRequired,
    changeStoragePrice: PropTypes.func.isRequired,
    changeCivilBM: PropTypes.func.isRequired,
    changeCivilBF: PropTypes.func.isRequired,
    changeCivilCM: PropTypes.func.isRequired,
    changeCivilCF: PropTypes.func.isRequired,
    changeCivilA: PropTypes.func.isRequired,
  }).isRequired,
};

export default ProjectItemRowRenderTool;
