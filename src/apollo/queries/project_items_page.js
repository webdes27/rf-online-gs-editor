import gql from 'graphql-tag';

export default gql`
  query($id: String!) {
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

      moneyTypes {
        items {
          title
          value
          fieldName
        }
      }

      itemGrades {
        items {
          title
          value
        }
      }
    }
  }
`;