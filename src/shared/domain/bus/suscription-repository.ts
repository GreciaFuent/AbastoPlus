export interface SubscriptionRepository<T> {
    execute(payload: {}): void
}