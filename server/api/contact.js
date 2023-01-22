import nodemailer from 'nodemailer';
import { ErrorCodes } from 'nuxt/dist/app/compat/capi';
import validator from 'validator';
const config = useRuntimeConfig();


const transporter = nodemailer.createTransport(
		{
			host: config.MESSAGE_HOST,
			port: config.MESSAGE_PORT,
			secure: true, // true for 465, false for other ports
			auth: {
			  user: config.MESSAGE_EMAIL, // generated ethereal user
			  pass: config.MESSAGE_PASS,// generated ethereal password
			}
	}
)

export default defineEventHandler(async (event,response) =>{
	try {
		const body = await readBody(event);

		await isValid(body).then(async (data) => {
			const mail = await transporter.sendMail({
				from: config.MESSAGE_EMAIL,
				to: config.MESSAGE_EMAIL,
				subject:'Обращение с сайта businessflava.com',
				text:'Имя заказчика: ' + body.name 
				+ " E-mail заказчика: " + body.email + " Телефон заказчика: " + body.phone + " О проекте: " + body.project
			});
		});


		return 'success';
	} catch (error) {
		sendError( event, createError({
			statuscode:400,
			statusMessage: error
		}));
	}
});

async function isValid(body){
	
	const errors = [];

	if (validator.isEmpty(body.email || ''))
		errors.push({
			field:'email',
			error: 'Field is required'
		})
	if (validator.isEmpty(body.name || ''))
		errors.push({
			field:'name',
			error: 'Field is required'
		})
	if (validator.isEmpty(body.phone || ''))
		errors.push({
			field:'phone',
			error: 'Field is required'
		})
	if (validator.isEmail(body.email || ''))
		errors.push({
			field:'phone',
			error: 'Field should be a valid email'
		})
	
	if (errors.length > 0) {
		return Promise.reject(errors);
	} else {
		return Promise.resolve({
			email: validator.normalizeEmail(body.email),
			name: validator.escape(body.name),
			phone: validator.escape(body.phone),
		})
	}
}