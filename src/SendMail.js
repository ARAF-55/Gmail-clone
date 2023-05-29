import { Button } from "@mui/material";
import "./SendMail.css";
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { colRef, addDoc, serverTimestamp } from './firebase';

function SendMail() {
    const dispatch = useDispatch();
    const form = useForm();
    const { register, handleSubmit, formState } = form;
    const { errors } = formState;

    const onSubmit = (formData) => {
        addDoc(colRef, {
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: serverTimestamp(),
        }).then(() => dispatch(closeSendMessage()));
    };

    return (
        <div className="sendMail">
            <div className="sendMail_header">
                <h3>New Message</h3>
                <CloseIcon className="sendMail_close" onClick={() => dispatch(closeSendMessage())} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>

                <input
                    placeholder="To"
                    {...register("to", { required: "Username is required", })}
                />

                {errors.to && <p className="sendMail_error">To is required!</p>}

                <input
                    placeholder="Subject"
                    type="text"
                    {...register("subject", { required: "Subject is required" })}
                />

                {errors.subject && <p className="sendMail_error">Subject is required!</p>}

                <input
                    className="sendMail_message"
                    placeholder="Message..."
                    type="text"
                    {...register("message", { required: "Message is required", })}
                />

                {errors.message && <p className="sendMail_error">Message is required!</p>}

                <div className="sendMail_options">
                    <Button
                        className="senMail_send"
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Send
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default SendMail;