import MasterModel from '../Master';
const master = new MasterModel();

class Master {
    
    static async login(phone){
        return await master.login(phone)
    }

    static async getMasterLogin(req,res){
        return await master.getMasterLogin(req,res)
    }

    static async getMasters() {
        return await master.getMasters()
    }

    static async getMaster(id){
        return await master.getMaster(id)
    }

    static async createMaster(body) {
        return await master.createMaster(body)
    }

    static async updateMaster(id, body) {
        return await master.updateMaster(id, body)
    }

    static async updateMasterWithPass(id, body) {
        return await master.updateMasterWithPass(id, body)
    }

    static async deleteMaster(id){
        return await master.deleteMaster(id)
    }
    
}

export default Master;