import { FC, FormEvent, useState } from 'react';
import { Box, Button, OutlinedInput, Theme, Select, FormControl, Grid } from '@material-ui/core';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import { makeStyles } from '@material-ui/core/styles';
import { FormErrorInterface, ServerResponseInterface } from '../shared.types';
import { urlSubscribeMembership } from '../api';

const useStyles = makeStyles((theme: Theme) => ({
  input: {
    backgroundColor: theme.palette.common.white,
    width: '100%',
  },
  select: {
    width: '100%',
  },
}));

const inputFields = [
  { name: 'SALUTATION', placeholder: 'Salutation', type: 'text', required: false },
  { name: 'FNAME', placeholder: 'First Name', type: 'text', required: true },
  { name: 'LNAME', placeholder: 'Last Name', type: 'text', required: true },
  { name: 'COMPANY', placeholder: 'Company', type: 'text', required: true },
  { name: 'TITLE', placeholder: 'Title', type: 'text', required: false },
  { name: 'EMAIL', placeholder: 'Your Email', type: 'email', required: true },
  { name: 'CEMAIL', placeholder: 'Confirm Email', type: 'email', required: true },
];

interface RequestObjectBody {
  MEMBERSHIP: string;
  SALUTATION?: string;
  FNAME: string;
  LNAME: string;
  COMPANY: string;
  TITLE?: string;
  EMAIL: string;
}

const FormMembershipSubscribe: FC = () => {
  const classes: ClassNameMap<string> = useStyles({});
  const [serverResponse, setServerResponse] = useState<ServerResponseInterface>();
  const [errors, setErrors] = useState<FormErrorInterface[]>([]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const body: {[k: string]: string} = {};

    body.MEMBERSHIP = data.get('MEMBERSHIP') as string;
    inputFields.forEach(({ name }) => {
      body[name] = data.get(name) as string;
    });

    if (!body.EMAIL) {
      setErrors([{ key: 'email', message: 'E-mail is required.' }]);
    } else {
      const requestSettings = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      };
      fetch(urlSubscribeMembership, requestSettings)
        .then((res) => {
          if (res.ok) {
            setServerResponse({ type: 'success', message: 'You have been subscribed!' });
          }
        }).catch((fetchError) => {
          // eslint-disable-next-line no-console
          console.log(fetchError);
          setServerResponse({ type: 'error', message: 'Please try again later.' });
        });
    }
  };

  return (
    <Grid container>
      <Grid item xs={12} md={8} lg={6}>
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
          <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column">
              <Box display="flex" mb={2}>
                <FormControl className={classes.select} variant="outlined">
                  <Select
                    native
                    inputProps={{
                      name: 'MEMBERSHIP',
                      id: 'membership-type',
                    }}
                  >
                    <option value="Individual">Individual</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Institutional">Institutional</option>
                  </Select>
                </FormControl>
              </Box>
              {inputFields.map(({ name, placeholder, type, required }) => (
                <Box key={name} display="flex" mb={2}>
                  <OutlinedInput
                    type={type}
                    name={name}
                    className={classes.input}
                    placeholder={`${placeholder} ${required ? '*' : ''}`}
                    required={required}
                  />
                </Box>
              ))}
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
          </form>
        )}
      </Grid>
    </Grid>
  );
};

export default FormMembershipSubscribe;
