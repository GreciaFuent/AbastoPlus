export interface SubscriptionRepository<T> {
    execute(key: string, payload: {}): void
}