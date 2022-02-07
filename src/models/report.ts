import * as Joi from "joi";

/**
 * The users reports to the page
 */
export interface Report {
    uid: string;
    userUid: string;
    pageUid: string;
    reasonDesc: string;
    createdIso: string;
}

export const subscriptionSchema = Joi.object({
    uid: Joi.string().required(),
    userUid: Joi.string().required(),
    pageUid: Joi.string().required(),
    reasonDesc: Joi.string().required().min(10),
    createdIso: Joi.string().isoDate().required(),
})

export const reasonMaxLength = 500
export const reasonMinLength = 10
export const reasonDescSchema = Joi.string().min(reasonMinLength).max(reasonMaxLength).required();
