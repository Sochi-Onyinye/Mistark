import { Auth, Hub } from 'aws-amplify';

export async function signUp(newUser) {
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
        return user
    } catch (error) {
        return error
    }
}

export async function resendConfirmationCode(username) {
    try {
        await Auth.resendSignUp(username);
        console.log('code resent successfully');
    } catch (err) {
        console.log('error resending code: ', err);
    }
}


export async function confirmSignUp(username, code) {
    try {
        await Auth.confirmSignUp(username, code, { forceAliasCreation: false });
    } catch (error) {
        console.log('error confirming sign up', error);
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
    try {
        const user = await Auth.signIn(username, password);
        return true
    } catch (error) {
        console.log('error signing in', error);
        return false
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
