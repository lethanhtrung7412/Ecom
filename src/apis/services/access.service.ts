import {shopModel} from "../models/shop.model";

export class AccessService {
    static signUp = async (name, email, password) =>{
        try {  
            const handleShop = await shopModel.findOne({email}).lean();
            if (handleShop) {
                return {
                    code: 'xxxx',
                    message: "Shop already register",
                }
            }

            const newShop = await shopModel.create({
                name, email, password
            })
        } catch (error) {
            return {
                code: 'xxx',
                message: error,
                status: 'error'
            }
        }
    }
}