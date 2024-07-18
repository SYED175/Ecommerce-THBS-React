import apiClient from "./api-client";

class HttpService{

    endpoint:string;
    constructor(endpoint:string){
        this.endpoint=endpoint;
    }
    getAll<T>(){
        
    const controller = new AbortController();
    const signal = controller.signal;
       const request =  apiClient
      .get<T>(this.endpoint, { signal })

      return {request,cancel:()=>controller.abort()}
    }

    getByPagination<T>(pageSize:number,page:number){
        return apiClient.get<T>(`${this.endpoint}?sort[0]=pid:asc&pagination[pageSize]=${pageSize}&pagination[page]=${page}`);
    }
}

const create =  (endpoint:string)=>{
    return new HttpService(endpoint);
};

export default create;