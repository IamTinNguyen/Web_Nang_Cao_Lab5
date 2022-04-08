const User = require('../models/users');
const fetch = require('node-fetch');

module.exports.index = async(req, res) => {
    const api_url = 'https://web-nang-cao.herokuapp.com/lab5/users';
    const fetch_response = await fetch(api_url);
    const user = await fetch_response.json();
    // console.log(json[0].id);
    res.render('products/index', { user });
}

module.exports.renderAdd = async(req, res) => {
    res.render('products/add');
}


module.exports.add = async(req, res) => {
    const { name, age, email, gender, id } = req.body;
    const api_url = 'https://web-nang-cao.herokuapp.com/lab5/users';
    // const fetch_response = await fetch(api_url);

    const user = await User.create({
        name: name,
        age: parseInt(age),
        email: email,
        gender: gender,
    })

    const data = {
        name: user.name,
        age: user.age,
        email: user.email,
        gender: user.gender,
        created_at: user.createdAt,
        update_at: user.updatedAt,
    };


    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    const fetch_response = await fetch(api_url, options)
    const data_response = await fetch_response.json();
    console.log(user);

    res.redirect(`/`);
}


module.exports.renderUpdate = async(req, res) => {
    const { id } = req.params;
    const api_url = `https://web-nang-cao.herokuapp.com/lab5/users/${id}`;
    const fetch_response = await fetch(api_url);
    const data = await fetch_response.json();
    let user;
    if (data.code == 0) {
        user = data.data
    }

    res.render('products/update', { user });
}

module.exports.update = async(req, res) => {
    const { id } = req.params;
    const { name, age, email, gender } = req.body;
    const api_url = 'https://web-nang-cao.herokuapp.com/lab5/users';
    // const fetch_response = await fetch(api_url);

    const user = await User.create({
        name: name,
        age: parseInt(age),
        email: email,
        gender: gender,
    })

    const data = {
        id: id,
        name: user.name,
        age: user.age,
        email: user.email,
        gender: user.gender,
        created_at: user.createdAt,
        update_at: user.updatedAt,
    };


    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    const fetch_response = await fetch(api_url, options)
    const data_response = await fetch_response.json();
    console.log(data);

    console.log(data_response);

    res.redirect(`/`);
}


module.exports.delete = async(req, res) => {
    const { id } = req.params;
    const api_url = `https://web-nang-cao.herokuapp.com/lab5/users/${id}`;
    const options = {
        method: 'DELETE',
    }
    console.log(api_url);

    const fetch_response = await fetch(api_url, options);
    const data_response = await fetch_response.json();
    console.log(data_response);

    res.redirect(`/`);
}