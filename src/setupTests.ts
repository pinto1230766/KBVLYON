import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';

// Configuration globale pour Testing Library
configure({ testIdAttribute: 'data-test' });
