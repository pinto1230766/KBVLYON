import { renderHook } from '@testing-library/react';
import useOfflineStorage from './useOfflineStorage';

describe('useOfflineStorage', () => {
  it('should initialize with empty data', () => {
    const { result } = renderHook(() => useOfflineStorage('testKey'));
    expect(result.current.data).toBeNull();
  });

  it('should save and retrieve data', () => {
    const { result } = renderHook(() => useOfflineStorage('testKey'));
    
    // Save data
    const testData = { name: 'Test' };
    result.current.saveData(testData);
    
    // Retrieve data
    const retrievedData = result.current.data;
    expect(retrievedData).toEqual(testData);
  });
});
