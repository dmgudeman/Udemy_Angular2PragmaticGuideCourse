import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {
    authors: string[] = ["Author1", "Author2","Author3"];
    
    
    getAuthors (): string[]{
    return this.authors;
    }
    
}