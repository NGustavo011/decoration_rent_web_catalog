import axios from 'axios';

axios.defaults.validateStatus = function(){
  return true;
}

export const manageData_api = axios.create({
  baseURL: process.env.API_BASE_URL,
});

export type Categories = {
    _id: string,
    _name: string,
    _description: string,
    _creationDate: string,
}[];

export type Themes = {
    _id: string,
    _name: string,
    _description: string,
    _creationDate: string,
}[];

export type Products = {
    _id: string,
    _name: string,
    _category: {
        _id: string,
        _name: string,
        _description: string,
        _creationDate: Date,
        _products: [],
    },
    _theme: {
        _id: string,
        _name: string,
        _description: string,
        _creationDate: Date,
        _products: []
    },
    _principalImage: string,
    _images: string[],
    _description: string,
    _grossPrice: number,
    _netPrice: number,
    _creationDate: Date,
    _visible: boolean,
    _available: boolean,
}[];