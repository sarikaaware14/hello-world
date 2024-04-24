import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet ,RouterLink} from '@angular/router';
import { Router,RouterModule } from '@angular/router'; 
import { ReversePipe } from './reverse.pipe'; 
import { CryptoService } from './crypto.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterModule,RouterLink,ReversePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "hello-world";
  test = "testing";

  encryptedData: string ='';
  decryptedData: string ='';
  secretKey = 'mySecretKey';

  encryptAndDecryptData() {
    var originalData = '1';
    // Encrypt data
    this.encryptedData = this.cryptoService.encryptData(originalData, this.secretKey);
    
    // Decrypt data
    this.decryptedData = this.cryptoService.decryptData(this.encryptedData, this.secretKey);
  }

  ngOnInit(): void{
    this.welcomeBack();
    this.helloWorld();
  }
  constructor(public router: Router,private cryptoService: CryptoService) {
    console.log(this.router.url);
  }
  public welcomeBack(): void {
    console.log(this.helloWorld());
  }
  public helloWorld(): string {
    return "hello-world";
  }
  clickButton(path: string) {
    this.router.navigate([path]);
  } 
  btnClick() {
    this.router.navigateByUrl('page1');
  };
  
}


