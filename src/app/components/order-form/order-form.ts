import { Component } from '@angular/core';
import {Button} from '../../ui/button/button';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NoDotsDirective} from '../../directives/no-dots.directive';
import {OrderService} from '../../services/order.service';
import {Popup} from '../popup/popup';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [
    Button,
    ReactiveFormsModule,
    NoDotsDirective,
    Popup
  ],
  templateUrl: './order-form.html',
  styleUrl: './order-form.scss',
})
export class OrderForm {
  form: FormGroup;
  submitting = false;
  success = false;

  get name() {
    return this.form.get('name')
  }

  get address() {
    return this.form.get('address')
  }

  get phone() {
    return this.form.get('phone')
  }

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      address: ['', [Validators.required, Validators.minLength(5)]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\+?\d{10,15}$/),
        ],
      ],
    });
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting = true;

    this.orderService.sendOrder(this.form.value).subscribe({
      next: () => {
        this.success = true;
        this.form.reset();
        this.submitting = false;
      },
      error: () => {
        this.submitting = false;
        alert('Ошибка отправки');
      },
    });
  }

  closePopup() {
    this.success = false;
  }
}
