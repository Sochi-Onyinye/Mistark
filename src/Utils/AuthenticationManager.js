import { Auth, Hub } from 'aws-amplify';

export async function signUp(newUser) {
    var isUserCreated = null;
    var error = null;
    var createdUser = null;
    try {
        const { user } = await Auth.signUp({
            username : newUser.getEmail(),
            password : newUser.getPassword(),
            attributes: {
                email : newUser.getEmail(),
                family_name : newUser.getLName(),
                given_name : newUser.getFName(),
                phone_number: newUser.getPhoneNumber(),
                birthdate: newUser.getDOB(),
            },
            autoSignIn: {
                enabled: true,
            }
        });
        createdUser = user;
        isUserCreated  = true
    } catch (err) {
        isUserCreated  = false;
        error = err;
    }
    return {
        'isUserCreated':isUserCreated,
        'error': error, 
        'user':createdUser
    }
}

export async function resendConfirmationCode(username) {
    var error = null;
    var isCodeResent = null;
    try {
        await Auth.resendSignUp(username);
        isCodeResent = true;
    } catch (err) {
        isCodeResent = false;
        error = err;
    }
    return {
        'isCodeResent':isCodeResent, 
        'error':error
    }
}

export async function confirmSignUp(username, code) {
    var isSignUpConfirmed = null;
    var error = null;
    try {
        await Auth.confirmSignUp(username, code, { forceAliasCreation: false });
        isSignUpConfirmed = true
    } catch (err) {
        isSignUpConfirmed = false
        error = err
        console.log('error confirming sign up', error);
    }

    return {
        'isSignUpConfirmed':isSignUpConfirmed,
        'error' : error
    }
}


function listenToAutoSignInEvent() {
    Hub.listen('auth', ({ payload }) => {
        const { event } = payload;
        if (event === 'autoSignIn') {
            const user = payload.data;
            // assign user
        } else if (event === 'autoSignIn_failure') {
            // redirect to sign in page
        }
    })
}

export async function signIn(username, password) {
    var isUserSignedIn = null;
    var error = null;
    var user = null;

    try {
        const signedInUser = await Auth.signIn(username, password);
        isUserSignedIn = true;
        user = signedInUser
    } catch (err) {
        isUserSignedIn = false;
        error = err;

    }

    return {
        'isUserSignedIn' :isUserSignedIn,
        'user' : user,
        'error' : error,
    }
}

export async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

export const emailValidator = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+$/;
    return emailRegex.test(email)
}
