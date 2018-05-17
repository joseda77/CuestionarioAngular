import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  respuestasValidas = 0;
  estadoUsuario: String;

  preguntas: Pregunta[] = [{
    id: 1,
    texto: 'Esta es la pregunta 1',
    respuestaValida: 1,
    estado: '',
    respuestas: [{
      id: 1,
      texto: 'Pregunta 11'
    },
    {
      id: 2,
      texto: 'Pregunta 12'
    },
    {
      id: 3,
      texto: 'Pregunta 13'
    }],
    respuesta: 0
  },
    {
      id: 2,
      texto: 'Esta es la pregunta 2',
      respuestaValida: 1,
      estado: '',
      respuestas: [{
        id: 1,
        texto: 'Pregunta 21'
      },
      {
        id: 2,
        texto: 'Pregunta 22'
      },
      {
        id: 3,
        texto: 'Pregunta 23'
      }],
      respuesta: 0
    },
    {
      id: 3,
      texto: 'Esta es la pregunta 3',
      respuestaValida: 1,
      estado: '',
      respuestas: [{
        id: 1,
        texto: 'Pregunta 31'
      },
      {
        id: 2,
        texto: 'Pregunta 32'
      },
      {
        id: 3,
        texto: 'Pregunta 33'
      }],
      respuesta: 0
    }];

    onValidar(pregunta: Pregunta) {
      // tslint:disable-next-line:triple-equals
      if (pregunta.respuestaValida == pregunta.respuesta) {
        pregunta.estado = 'ok';
        this.respuestasValidas++;
      } else {
        // tslint:disable-next-line:triple-equals
        if (pregunta.estado == 'ok') { /** Preguntar el porque genera error el === */
          this.respuestasValidas--;
        }
        pregunta.estado = 'error';
      }
    }

    calcularEstado() {
      const promedioRespuestas = (this.respuestasValidas / this.preguntas.length) * 100;
      if (promedioRespuestas === 0) {
        this.estadoUsuario = 'looser';
      } else if (promedioRespuestas === 100) {
        this.estadoUsuario = 'guru';
      } else {
        this.estadoUsuario = 'poor';
      }
    }
}

export class Respuesta {
  id: number;
  texto: String;
}

export class Pregunta {
  id: number;
  texto: String;
  respuestas: Respuesta[];
  respuestaValida: number;
  estado: String;
  respuesta: number;
}
