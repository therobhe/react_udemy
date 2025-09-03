import { useEffect } from 'react';
import classes from './NewsletterSignup.module.css';
import { useFetcher } from 'react-router-dom';

function NewsletterSignup() {
    // fetchers are used to trigger loaders or actions without navigating to the corresponding route
    const fetcher = useFetcher();
    const { data, state } = fetcher; // holds the data returned from the action state or loader and the current state of the fetcher (idle, loading, submitting)

    useEffect(() => {
        if (data && data.message && state === 'idle') {
            window.alert(data.message);
        }
    }, [data, state]);

    return (
        <fetcher.Form method="post" action='/newsletter' className={classes.newsletter}>
            <input
                type="email"
                placeholder="Sign up for newsletter..."
                aria-label="Sign up for newsletter"
            />
            <button>Sign up</button>
        </fetcher.Form>
    );
}

export default NewsletterSignup;