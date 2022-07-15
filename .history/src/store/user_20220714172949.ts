import { defineStore} from 'pinia'

export const useUserStore = defineStore('storeUser',{
    state:() => {
        id: 'user',
        return { 
            firstName:'John',
            lastName:'Smith',
            accesstoken:'xxxxxxx'
        }
    },
    actions:{

    },
    persist:() => {}
})