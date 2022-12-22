import 'jest-preset-angular/setup-jest';
import { environment } from './src/environments/environment';

// sets the api endpoint to the one used by Pact
environment.tamServiceApi = 'http://localhost:6000';
