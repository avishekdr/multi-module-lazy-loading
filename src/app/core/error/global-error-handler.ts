import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Inject, Injectable, Injector, NgZone } from '@angular/core';

/**
 * @client Wm.T. Burnett & Co.
 * @created by Avishek Datta Ray on Jun, 2022
 * @project Flat Chemical
*/
/**
 * @description Global Error handler
 * @implements ErrorHandler
*/
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    /**
     * @constructor
     * @param {Injector} injector Dependency Injection for Injector
     * @param {NgZone} zone Dependency Injection for NgZone
    */
    constructor(@Inject(Injector) private injector: Injector, private zone: NgZone) { }

    /**
     * @description Method to handle the errors
     * @param {any} error Error fetched by handler
    */
    handleError(error: any) {
        // Check if it's an error from an HTTP response
        if (!(error instanceof HttpErrorResponse)) { error = error.rejection }
        this.zone.run(() => console.error(error));
    }
}