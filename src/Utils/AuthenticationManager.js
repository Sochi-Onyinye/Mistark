import { Auth, Hub } from 'aws-amplify';

async function signUp(newUser) {
    try {
        const { user } = await Auth.signUp({
            username: newUser.getUsername(),
            password: newUser.getPassword(),
            attributes: {
                email:newUser.getEmail(),
                phone_number: newUser.getPhoneNumber(),
            },
            autoSignIn: {
                enabled: true,
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}

async function resendConfirmationCode(username) {
    try {
        await Auth.resendSignUp(username);
        console.log('code resent successfully');
    } catch (err) {
        console.log('error resending code: ', err);
    }
}


async function confirmSignUp(username, code) {
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
