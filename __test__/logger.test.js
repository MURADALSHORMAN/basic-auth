'use strict';
const loggerMidleware = require('../src/middleware/logger');

describe ('logger Middleware', () => {

    let consoleSpy;
    const req = {
        id: 'id',
        data: { Name: 'string', type: 'string' }
    };
    const res = {};
    const next = jest.fn();

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    })
    afterEach(() => {
        consoleSpy.mockRestore();
    })

    it('logs output correctly', () => {
        loggerMidleware(req,res,next);
        expect(consoleSpy).toHaveBeenCalled();
    });

    it('move to the next', () => {
        loggerMidleware(req, res, next);
        expect(next).toHaveBeenCalledWith();
    });
})