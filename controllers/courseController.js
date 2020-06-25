const axios = require('axios');
const path = require('path');

let url = "http://localhost:8082/SpringBootRestApiOracleJBOSS";
let data = "";
let config = "";

exports.fetchAllCourses = (req, res) => {
	config = {
		method: 'get',
		url: `${url}/get/all`
	};
	axios(config).then(resp => {
        res.json(resp.data);	
	});
};


exports.fetchCourseById = (req, res) => {
	config = {
		method: 'get',
		url: `${url}/get/${req.params.id}`
	};
	axios(config).then(resp => {
		res.json(resp.data);
	});
};


exports.addAllCourses = (req, res) => {
	data = {
		"id": `${req.body.id}`,
		"courseName": `${req.body.courseName}`,
		"rating": `${req.body.rating}`,
		"price": `${req.body.price}`,
		"trainerName": `${req.body.trainerName}`,
		"numberOfDays": `${req.body.numberOfDays}`
	};
	config = {
		method: 'post',
		url: `${url}/post`,
		data
	};
	axios(config).then(resp => {
		res.json(resp.data);
	});
};


exports.updateCourseById = (req, res) => {
	data = {
		id: `${req.body.id}`,
		courseName: `${req.body.courseName}`,
		rating: `${req.body.rating}`,
		price: `${req.body.price}`,
		trainerName: `${req.body.trainerName}`,
		numberOfDays: `${req.body.numberOfDays}`
	};
	config = {
		method: 'put',
		url: `${url}/put/${req.params.id}`,
		data
	};
	axios(config).then(resp => {
		res.json(resp.data);
	});
};


exports.deleteCourseById = (req, res) => {
	config = {
		method: 'delete',
		url: `${url}/delete/${req.params.id}`
	};
	axios(config).then(resp => {
		res.json(resp.data);
	});
};



