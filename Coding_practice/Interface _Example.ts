// Define the shape of a User
interface User {
  id: number;
  name: string;
  email: string;
  isActive?: boolean;      // optional property
  readonly createdAt: Date; // can't be reassigned after creation
}

// Interfaces can describe function signatures too
interface UserRepository {
  findById(id: number): User | undefined;
  save(user: User): void;
}

// A class can "implement" an interface, enforcing the contract
class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  findById(id: number): User | undefined {
    return this.users.find(u => u.id === id);
  }

  save(user: User): void {
    this.users.push(user);
  }
}

// Interfaces can extend other interfaces
interface AdminUser extends User {
  permissions: string[];
}

// Usage
const repo = new InMemoryUserRepository();

//const newUser: User = {
  id: 1,
  name: "Asha Verma",
  email: "asha@example.com",
  //createdAt: new Date(),
};

//repo.save(newUser);

console.log(repo.findById(1)?.name); // "Asha Verma"