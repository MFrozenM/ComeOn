import React from 'react'
import '@testing-library/jest-dom'
import {useApiGet} from "../useApiGet";
import {renderHook} from "@testing-library/react-hooks";

describe("Data state", () => {

    test('Data should be fetched after correct api call', async () => {
        // useApiGet returns three values { data: , error: , loading: }
        const {result, waitForNextUpdate} = renderHook(() => useApiGet("https://randomuser.me/api/"))

        expect(result.current.data).toBeNull()

        await waitForNextUpdate()

        expect(result.current.data).toBeTruthy()
    })

    test('Data should be null after wrong api call', async () => {
        // Add apia instead of api
        const {result, waitForNextUpdate} = renderHook(() => useApiGet("https://randomuser.me/apia/"))

        expect(result.current.data).toBeNull()

        await waitForNextUpdate()

        expect(result.current.data).toBeNull()
    })

})


describe("Loading state", () => {

    test('Loading should be false after api call finished', async () => {
        // useApiGet returns three values { data: , error: , loading: }
        const {result, waitForNextUpdate} = renderHook(() => useApiGet("https://randomuser.me/api/"))

        expect(result.current.loading).toBe(true)

        await waitForNextUpdate()

        expect(result.current.loading).toBe(false)
    })

    test('Loading should be false after wrong api call', async () => {
        // Add apia instead of api
        const {result, waitForNextUpdate} = renderHook(() => useApiGet("https://randomuser.me/apia/"))

        expect(result.current.loading).toBe(true)

        await waitForNextUpdate()

        expect(result.current.loading).toBe(false)
    })

})


describe("Error state", () => {

    test('Error should be false after correct api call', async () => {
        // useApiGet returns three values { data: , error: , loading: }
        const {result, waitForNextUpdate} = renderHook(() => useApiGet("https://randomuser.me/api/"))

        expect(result.current.error).toBe(false)

        await waitForNextUpdate()

        expect(result.current.error).toBe(false)
    })

    test('Error should be true after wrong api call', async () => {
        // Add apia instead of api
        const {result, waitForNextUpdate} = renderHook(() => useApiGet("https://randomuser.me/apia/"))

        expect(result.current.error).toBe(false)

        await waitForNextUpdate()

        expect(result.current.error).toBe(true)
    })

})

