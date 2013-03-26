module ROVOR {
    interface TelescopeInterface {
        start(): TelescopeInterface;
        stop(): TelescopeInterface;
        isOn(): bool;
    }
    class Telescope implements TelescopeInterface {
        public name: string;
        private on;
        constructor(name: string);
        public start(): Telescope;
        public stop(): Telescope;
        public isOn(): bool;
        static someMethod(): void;
    }
}
module ROVOR {
    class AutoScope extends Telescope {
        public name: string;
        constructor(name?: string);
        public start(): AutoScope;
        private bootup();
    }
}
