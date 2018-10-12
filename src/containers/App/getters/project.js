import { IMMUTABLE_MAP, IMMUTABLE_LIST } from '../constants';

/**
 * Return the refs data
 * @param {Object} nextValue next item values
 * @param {Object} props entry: the first thing we got from the server
 *
 * @returns String
 */
export const getRefs = (
  nextValue = IMMUTABLE_MAP,
  { entry = IMMUTABLE_MAP },
) => ({
  moneyTypes: getRefMoneyTypes(nextValue, { entry }),
  itemGradeTypes: getRefItemGradeTypes(nextValue, { entry }),
  weaponTypes: getRefWeaponTypes(nextValue, { entry }),
  buttonTypes: getRefButtonTypes(nextValue, { entry }),
  effectTypes: getRefEffectTypes(nextValue, { entry }),
  expertTypes: getRefExpertTypes(nextValue, { entry }),
});

export const getRefEffectTypes = (
  nextValue = IMMUTABLE_MAP,
  { entry = IMMUTABLE_MAP },
) =>
  nextValue.getIn(
    ['effectTypes', 'items'],
    entry.getIn(['effectTypes', 'items'], IMMUTABLE_LIST),
  );

export const getRefExpertTypes = (
  nextValue = IMMUTABLE_MAP,
  { entry = IMMUTABLE_MAP },
) =>
  nextValue.getIn(
    ['expertTypes', 'items'],
    entry.getIn(['expertTypes', 'items'], IMMUTABLE_LIST),
  );

export const getRefMoneyTypes = (
  nextValue = IMMUTABLE_MAP,
  { entry = IMMUTABLE_MAP },
) =>
  nextValue.getIn(
    ['moneyTypes', 'items'],
    entry.getIn(['moneyTypes', 'items'], IMMUTABLE_LIST),
  );

export const getRefItemGradeTypes = (
  nextValue = IMMUTABLE_MAP,
  { entry = IMMUTABLE_MAP },
) =>
  nextValue.getIn(
    ['itemGradeTypes', 'items'],
    entry.getIn(['itemGradeTypes', 'items'], IMMUTABLE_LIST),
  );

export const getRefWeaponTypes = (
  nextValue = IMMUTABLE_MAP,
  { entry = IMMUTABLE_MAP },
) =>
  nextValue.getIn(
    ['weaponTypes', 'items'],
    entry.getIn(['weaponTypes', 'items'], IMMUTABLE_LIST),
  );

export const getRefButtonTypes = (
  nextValue = IMMUTABLE_MAP,
  { entry = IMMUTABLE_MAP },
) =>
  nextValue.getIn(
    ['buttonTypes', 'items'],
    entry.getIn(['buttonTypes', 'items'], IMMUTABLE_LIST),
  );
