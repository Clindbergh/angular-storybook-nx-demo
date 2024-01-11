import { ChangeDetectionStrategy, Component, ContentChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from '../nx-welcome.component';

@Component({
  selector: 'storybook-demo-test-component1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-component1.component.html',
  styleUrl: './test-component1.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent1Component {
  @ContentChildren(NxWelcomeComponent)
  myContentChildren?: QueryList<NxWelcomeComponent>;
}
