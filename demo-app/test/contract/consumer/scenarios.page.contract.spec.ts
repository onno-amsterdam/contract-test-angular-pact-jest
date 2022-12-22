import { JestPactOptions, pactWith } from 'jest-pact';
import { Interaction, Matchers } from '@pact-foundation/pact';

import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';

import { DemoService } from '../../../src/app/services/demo.service';

const jestPactOptions: JestPactOptions = {
    host: 'localhost',
    port: 6000,
    consumer: 'scenarios-page',
    provider: 'tam-service',
    dir: './pacts/scenarios-page/pacts',
    logDir: './pacts/scenarios-page/logs',
    logLevel: 'info'
};

pactWith(
    jestPactOptions,
    provider => {
        describe('Demo Service - 200', () => {
            beforeEach(async () => {
                TestBed.configureTestingModule({
                    imports: [
                        HttpClientModule
                    ],
                    providers: [
                        DemoService
                    ]
                });

                const interaction = new Interaction()
                    .given('There is a demo')
                    .uponReceiving('A request for a demo')
                    .withRequest({
                        method: 'GET',
                        path: '/demo-endpoint',
                        headers: {
                            "Accept": "application/json, text/plain, */*",
                            "Content-Type": "application/json"
                        }
                    }).willRespondWith({
                        status: 200,
                        headers: {
                            "Content-Type": "application/json; charset=utf-8",
                        },
                        body: Matchers.somethingLike(
                            JSON.parse(JSON.stringify({ name: 'Name of the demo' })))
                    });

                return provider.addInteraction(interaction);
            });

            it('Should respond with object with name', async () => {
                const scenariosService: DemoService = TestBed.inject(DemoService);
                scenariosService.getDemoName().subscribe(response => {
                    expect(response).toEqual({ name: 'Name of the demo' });
                });
            });
        });

        describe('Demo Service - 500', () => {
            beforeEach(async () => {
                TestBed.configureTestingModule({
                    imports: [
                        HttpClientModule
                    ],
                    providers: [
                        DemoService
                    ]
                });

                const interaction = new Interaction()
                    .given('There is an error in the server')
                    .uponReceiving('A request for a demo')
                    .withRequest({
                        method: 'GET',
                        path: '/demo-endpoint',
                        headers: {
                            "Accept": "application/json, text/plain, */*",
                            "Content-Type": "application/json"
                        }
                    }).willRespondWith({
                        status: 500,
                        headers: {
                            "Content-Type": "application/json; charset=utf-8",
                        }
                    });

                return provider.addInteraction(interaction);
            });

            it('Should respond 500 status', async () => {
                const scenariosService: DemoService = TestBed.inject(DemoService);
                scenariosService.getDemoName().subscribe({
                    next: () => fail('should have failed with the network error'),
                    error: (error: HttpErrorResponse) => {
                        expect(error.status).toBe(500);
                    },
                })
            });
        });
    }
);
