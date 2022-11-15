import {gql} from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        profile {
            _id
            name
        }
    }
}
`;

export const ADD_USER = gql`
mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            name
        }
    }
}
`;

export const SAVE_BOOK = gql`
mutation saveBook($book: savedBookId!) {
    saveBook(book: $book) {
        username
        email
        bookcount
        savedBooks {
            title
            author
            description
            image
            bookid
            link
        }
    }
}
`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
        username
        email
        bookcount
        savedBooks {
            title
            author
            description
            image
            bookid
            link
        }
    }
}`