import EventEmitter from 'events'

class SimpleEvent {
  private event = new EventEmitter()
  private eventName = 'defaultEvent'
  subscribe(listener: (...args: any[]) => void) {
    this.event.on(this.eventName, listener)
  }
  emit(...args: any[]) {
    this.event.emit(this.eventName, args)
  }
}

export default SimpleEvent
