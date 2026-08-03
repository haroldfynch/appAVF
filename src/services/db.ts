export interface Test {
    id?: number;
    titre: string;
    contenu: string;
}

class Database {

    private db!: IDBDatabase;

    async init(): Promise<void> {

        return new Promise((resolve, reject) => {

            const request = indexedDB.open("MaBase", 1);

            request.onupgradeneeded = () => {

                const db = request.result;

                if (!db.objectStoreNames.contains("test")) {

                    db.createObjectStore("test", {
                        keyPath: "id",
                        autoIncrement: true
                    });

                }

            };

            request.onsuccess = () => {

                this.db = request.result;
                resolve();

            };

            request.onerror = () => reject(request.error);

        });

    }

    async ajouter(test: Test): Promise<void> {

        return new Promise((resolve, reject) => {

            const tx = this.db.transaction("test", "readwrite");

            tx.objectStore("test").add(test);

            tx.oncomplete = () => resolve();

            tx.onerror = () => reject(tx.error);

        });

    }

    async getAll(): Promise<Test[]> {

        return new Promise((resolve, reject) => {

            const tx = this.db.transaction("test", "readonly");

            const request = tx.objectStore("test").getAll();

            request.onsuccess = () => resolve(request.result);

            request.onerror = () => reject(request.error);

        });

    }

}

export default new Database();