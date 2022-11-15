import {gql} from '@apollo/client';

export const GET_ME = gql`
{
    me {
        __id
        username
        email
        savedBooks {
            bookId
            title
            author
            description
            image
            link
        }
    }
}
`;