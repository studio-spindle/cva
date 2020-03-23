import { FC } from 'react';
import { Box, Button, OutlinedInput, Theme, Typography } from '@material-ui/core';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import { makeStyles } from '@material-ui/core/styles';

const negativeNumber = -1;

const useStyles = makeStyles((theme: Theme) => ({
  input: {
    backgroundColor: theme.palette.common.white,
    width: '300px',
  },
  white: {
    color: theme.palette.common.white,
  },
}));

const MailchimpSubscribe: FC = () => {
  const classes: ClassNameMap<string> = useStyles({});
  return (
    <div id="mc_embed_signup">
      <form
        action="https://creatingvalueconf.us19.list-manage.com/subscribe/post?u=275128d8e166d053af088aa66&amp;id=5c96284a31"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
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
                placeholder="First name"
                required
              />
            </Box>
            <Box display="flex" mb={1}>
              <OutlinedInput
                type="text"
                name="LNAME"
                id="mce-LNAME"
                className={classes.input}
                placeholder="Last name"
                required
              />
            </Box>
            <Box display="flex" mb={1}>
              <OutlinedInput
                type="text"
                name="MMERGE6"
                id="mce-MMERGE6"
                className={classes.input}
                placeholder="Profession"
                required
              />
            </Box>
            <Box display="flex" mb={1}>
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <input
                  type="text"
                  name="b_275128d8e166d053af088aa66_5c96284a31"
                  tabIndex={negativeNumber}
                  value=""
                />
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
    </div>
  );
};


export default MailchimpSubscribe;
