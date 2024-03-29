import React from 'react'
import {   Button, Dialog, 
    // IconButton,Typography 
} from "@material-ui/core/";
import { withStyles } from '@material-ui/core/styles';
// import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
// import MuiDialogActions from '@material-ui/core/DialogActions';
// import CloseIcon from '@material-ui/icons/Close';
import {RateShopGif} from  "../../core/ImagesGif";
import "./popup-common.scss";
const QuickThanks = () => {
    // const styles = (theme) => ({
    //     root: {
    //         margin: 0,
    //         padding: theme.spacing(2),
    //     },
    //     closeButton: {
    //         position: 'absolute',
    //         right: theme.spacing(1),
    //         top: theme.spacing(1),
    //         color: theme.palette.grey[500],
    //     },
    // });
    // const DialogTitle = withStyles(styles)((props) => {
    //     const { children, classes, onClose, ...other } = props;
    //     return (
    //         <div className='modal-header'>
    //             <MuiDialogTitle disableTypography className={classes.root} {...other}>
    //                 <Typography variant="h6">{children}</Typography>
    //                 {onClose ? (
    //                 <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
    //                     <CloseIcon />
    //                 </IconButton>
    //                 ) : null}
    //             </MuiDialogTitle>
    //         </div>
    //     );
    // });
    const DialogContent = withStyles((theme) => ({
        root: {
          padding: theme.spacing(2),
        },
    }))(MuiDialogContent);
    // const DialogActions = withStyles((theme) => ({
    //     root: {
    //       margin: 0,
    //       padding: theme.spacing(1),
    //     },
    // }))(MuiDialogActions);

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return(<>
        {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
           Thank you form
        </Button>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} className="modal-dialog" fullWidth
  maxWidth="sm">
            <DialogTitle id="customized-dialog-title" onClose={handleClose} className="dialog-title">
            Modal title
            </DialogTitle>
            <DialogContent dividers className='dialog-body'>
                <Typography gutterBottom>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                    in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </Typography>
                <Typography gutterBottom>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                    lacus vel augue laoreet rutrum faucibus dolor auctor.
                </Typography>
                <Typography gutterBottom>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                    scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                    auctor fringilla.
                </Typography>
            </DialogContent>
            <DialogActions className='dialog-footer'>
            <Button autoFocus onClick={handleClose} color="primary">
                Save changes
            </Button>
            </DialogActions>
        </Dialog> */}
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
           Thank you form
        </Button>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} className="modal-dialog thankyou-modal" fullWidth
  maxWidth="sm">
            <DialogContent dividers className='dialog-body'>
              <div className='thankyou-modal'>
                    <img src={RateShopGif} alt="Rate Shop"/>
              </div>
            </DialogContent>           
        </Dialog>
    </>)
 }

export default QuickThanks;