import { FC, FormEvent, useState } from 'react';
import { Box, Button, OutlinedInput, Theme } from '@material-ui/core';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import { makeStyles } from '@material-ui/core/styles';
import { FormErrorInterface, ServerResponseInterface } from '../shared.types';
import { urlSubscribeMailchimp } from '../api';

const useStyles = makeStyles((theme: Theme) => ({
  input: {
    backgroundColor: theme.palette.common.white,
    width: '300px',
  },
  white: {
    color: theme.palette.common.white,
  },
  error: {
    color: theme.palette.error.main,
  },
}));

const FormEventSubscribe: FC = () => {
  const classes: ClassNameMap<string> = useStyles({});
  const [serverResponse, setServerResponse] = useState<ServerResponseInterface>();
  const [errors, setErrors] = useState<FormErrorInterface[]>([]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get('EMAIL') as string;
    const name = data.get('FNAME') as string;
    const lastName = data.get('LNAME') as string;
    const profession = data.get('MMERGE6') as string;
    const signupLocation = data.get('b_275128d8e166d053af088aa66_5c96284a31') as string;

    if (!email) {
      setErrors([{ key: 'email', message: 'E-mail is required.' }]);
    } else {
      const requestSettings = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name,
          lastName,
          profession,
          signupLocation,
        }),
      };
      fetch(urlSubscribeMailchimp, requestSettings)
        .then((res) => {
          console.log('response ===> ', res);
          if (res.ok) {
            setServerResponse({ type: 'success', message: 'You have been subscribed!' });
          } else if (res.status === 422) {
            setServerResponse({ type: 'warning', message: 'You have already been subscribed.' });
          } else {
            setServerResponse({ type: 'error', message: 'Please try again later.' });
          }
        }).catch((fetchError) => {
          // eslint-disable-next-line no-console
          console.log(fetchError);
          setServerResponse({ type: 'error', message: 'Please try again later.' });
        });
    }
  };

  // eslint-disable-next-line no-console
  console.log('test5');

  return (
    <div id="mc_embed_signup">
      {errors && (
        errors.map(({ key, message }) => (
          <div key={key}>
            <p>{message}</p>
          </div>
        ))
      )}
      {serverResponse && (
        <p className={`classes.${serverResponse.type}`}>{serverResponse.message}</p>
      )}
      {!serverResponse && (
        <form
          action="https://creatingvalueconf.us19.list-manage.com/subscribe/post?u=275128d8e166d053af088aa66&amp;id=5c96284a31&amp;SIGNUP=eventpage3conference"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          onSubmit={handleSubmit}
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <Box display="flex" flexDirection="column">
              <Box display="flex" mb={1}>
                <OutlinedInput
                  type="email"
                  name="EMAIL"
                  id="mce-EMAIL"
                  className={classes.input}
                  placeholder="Email address*"
                  required
                />
              </Box>
              <Box display="flex" mb={1}>
                <OutlinedInput
                  type="text"
                  name="FNAME"
                  id="mce-FNAME"
                  className={classes.input}
                  placeholder="First name*"
                  required
                />
              </Box>
              <Box display="flex" mb={1}>
                <OutlinedInput
                  type="text"
                  name="LNAME"
                  id="mce-LNAME"
                  className={classes.input}
                  placeholder="Last name*"
                  required
                />
              </Box>
              <Box display="flex" mb={1}>
                <OutlinedInput type="text" name="MMERGE6" className={classes.input} placeholder="Profession*" required />
              </Box>
              <Box display="flex" mb={1}>
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                  <input type="text" name="b_275128d8e166d053af088aa66_5c96284a31" tabIndex={-1} defaultValue="" />
                </div>
                <div className="response" id="mce-error-response" style={{ display: 'none' }} />
                <div className="response" id="mce-success-response" style={{ display: 'none' }} />
              </Box>
              <Box display="flex">
                <Button
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  variant="contained"
                  color="primary"
                >
                  Subscribe
                </Button>
              </Box>
            </Box>
          </div>
        </form>
      )}
    </div>
  );
};

export default FormEventSubscribe;
