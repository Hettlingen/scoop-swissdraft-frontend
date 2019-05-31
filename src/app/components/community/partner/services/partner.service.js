"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
let PartnerService = class PartnerService {
    constructor(http) {
        this.http = http;
        this.headers = new http_1.HttpHeaders();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    getPartner(uuid) {
        return this.http.get('http://localhost:8081/api/v1/partner/' + uuid);
    }
    getListPartner() {
        return this.http.get('http://localhost:8081/api/v1/partner/');
    }
    createPerson(body) {
        return this.http.get('http://localhost:8081/api/v1/persons/');
        // let bodyString = JSON.stringify(body); // Stringify payload
        // let headers      = new HttpHeaders({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        // let options       = new RequestOptions({ headers: headers }); // Create a request option
        //
        // return this.http.post(this.commentsUrl, body, options) // ...using post request
        //   .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
        //   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
    createInstitution(body) {
        return this.http.get('http://localhost:8081/api/v1/institutions/');
        // let bodyString = JSON.stringify(body); // Stringify payload
        // let headers      = new HttpHeaders({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        // let options       = new RequestOptions({ headers: headers }); // Create a request option
        //
        // return this.http.post(this.commentsUrl, body, options) // ...using post request
        //   .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
        //   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
    updatePerson(body) {
        // let bodyString = JSON.stringify(body); // Stringify payload
        // let headers      = new HttpHeaders({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        // let options       = new RequestOptions({ headers: headers }); // Create a request option
        //
        // return this.http.put(`${this.commentsUrl}/${body['id']}`, body, options) // ...using put request
        //   .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
        //   .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
        return null;
    }
    updateInstitution(body) {
        // let bodyString = JSON.stringify(body); // Stringify payload
        // let headers      = new HttpHeaders({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        // let options       = new RequestOptions({ headers: headers }); // Create a request option
        //
        // return this.http.put(`${this.commentsUrl}/${body['id']}`, body, options) // ...using put request
        //   .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
        //   .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
        return null;
    }
    deletePartner(uuid) {
        // return this.http.delete(`${this.commentsUrl}/${uuid}`)
        //   .map((res:Response) => res.json())
        //   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
};
PartnerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], PartnerService);
exports.PartnerService = PartnerService;
//# sourceMappingURL=partner.service.js.map