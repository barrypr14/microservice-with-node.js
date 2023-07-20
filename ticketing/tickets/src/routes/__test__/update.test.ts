import request from 'supertest';
import { app } from '../../app';
import mongoose from 'mongoose';

it('return a 404 if the provided id does not exist',async () => {
    const id = new mongoose.Types.ObjectId().toHexString();
    await request(app)
        .put(`/api/tickets/${id}`)
        .set('Cookie',global.signin())
        .send({
            title: 'asdfs',
            price: 20
        })
        .expect(404);
});

it('return a 401 if the user is not authenicated',async () => {
    const id = new mongoose.Types.ObjectId().toHexString();
    await request(app)
        .put(`/api/tickets/${id}`)
        .send({
            title: 'asdfs',
            price: 20
        })
        .expect(401);
});

it('return a 401 if the user does not own the ticket',async () => {
   const response = await request(app)
    .post('/api/tickets') 
    .set('Cookie', global.signin())
    .send({
        title: 'adgdfg',
        price: 20
    });

    await request(app)
        .put(`/api/tickets/${response.body.id}`)
        .set('Cookie',global.signin())
        .send({
            title: 'etadfg',
            price: 230
        })
        .expect(401);
});

it('return a 400 if the user provides an invalid title or price',async () => {
    const cookie = global.signin();

    const response = await request(app)
        .post('/api/tickets') 
        .set('Cookie', cookie)
        .send({
            title: 'adgdfg',
            price: 20
        });

    await request(app)
        .put(`/api/tickets/${response.body.id}`)
        .set('Cookie',cookie)
        .send({
            title: '',
            price: 20
        })
        .expect(400);
    await request(app)
        .put(`/api/tickets/${response.body.id}`)
        .set('Cookie',cookie)
        .send({
            title: 'efegdfg',
            price: -20
        })
        .expect(400);
});

it('update the ticket provided valid input',async () => {
    const cookie = global.signin();

    const response = await request(app)
        .post('/api/tickets') 
        .set('Cookie', cookie)
        .send({
            title: 'adgdfg',
            price: 20
        });

    await request(app)
        .put(`/api/tickets/${response.body.id}`)
        .set('Cookie',cookie)
        .send({
            title: 'new title',
            price: 100
        })
        .expect(200);

    const ticketRespsnse = await request(app)
        .get(`/api/tickets/${response.body.id}`)
        .send()

    expect(ticketRespsnse.body.title).toEqual('new title');
    expect(ticketRespsnse.body.price).toEqual(100);
});