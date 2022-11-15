const { User, book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
              return Profile.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
          },
        },

        user: async (parent, { userID}) => {
            return User.findOne({ _id: userId });
        },
},
Mutation: {
    addUser: async (parent, args) => {
        const user = await user.create(args);
        const token = signToken(user);
        
        return {token, user};
    },
    login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });

        if (!user) {
            throw new AuthenticatorError('No user with this email found!');
        }

        const correctPw = await user.isCorrectPassword(passwordq);
        if (!correctPw) {
            throw new AuthenticationError('Incorrect password!');
        }
        const token = signToken(user);
        return { token, user};
    },
    saveBook: async (parent, { BookId }, context) => {
        if (context.user) {
            const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: {savedBooks: book} },
                { new: true, }
            )
            return updatedUser;
        }
        throw new AuthenticationError('You need to be logged in!')
    },
    removeBook: async (parent, { BookId}, context) => {
        if (context.user) {
            const updatedUser = await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $pull: { savedBooks: { bookId: URLSearchParams.bookId} } }, 
                )
                return updatedUser;
        
        }
    }
};

module.exports = resolvers;