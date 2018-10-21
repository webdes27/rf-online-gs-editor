import gql from 'graphql-tag';
import ProjectIncludeAllTypes from '../fragments/ProjectIncludeAllTypes';
import StoreClientNameParts from '../fragments/StoreClientNameParts';
import StoreServerNameParts from '../fragments/StoreServerNameParts';
import ItemClientNameParts from '../fragments/ItemClientNameParts';
import ItemServerNameParts from '../fragments/ItemServerNameParts';

export default gql`
  query($id: String!, $storeId: String!) {
    project(id: $id) {
      title
      description
      name
      id
      createdAt
      updatedAt
      isPublic
      owner {
        id
        login
        role {
          id
          name
          title
        }
      }

      items {
        total
      }

      stores {
        total
      }

      itemsBox: items(where: { type: "box" }) {
        total
      }

      boxItemOuts {
        total
      }

      # include types
      ...ProjectIncludeAllTypes
    }

    store(id: $storeId) {
      id
      nIndex

      client {
        ...StoreClientNameParts
      }

      server {
        ...StoreServerNameParts
      }

      items {
        id
        type
        nIndex

        clientND {
          strName
        }

        client {
          ...ItemClientNameParts
        }

        server {
          ...ItemServerNameParts
        }
      }
    }
  }

  # include fragments
  ${ProjectIncludeAllTypes}
  ${StoreClientNameParts}
  ${StoreServerNameParts}
  ${ItemClientNameParts}
  ${ItemServerNameParts}
`;
