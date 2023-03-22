import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
    constructor() {
        this._type = []
        this._brands = []
        this._device = [
            // {id: 1, name: '12 Pro', price: 20000, rating: 5, img: 'img'},
            // {id: 2, name: '13 Pro', price: 20000, rating: 5, img: 'img'},
            // {id: 3, name: '14 Pro', price: 20000, rating: 5, img: 'img'},
            
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._type = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._device = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }


    get types() {
        return this._type
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._device
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}