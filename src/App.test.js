import { fireEvent } from '@testing-library/react';
import renderWithRouter from './helper/renderWithRouter';
import App from './App';

describe('Testes', () => {
  beforeEach(() => {
    window.localStorage.clear();
  })
  
  it('1 - Testa se a página contem o Header correto', () => {
    const { getByText } = renderWithRouter(<App />);
    const header = getByText(/lista de tarefas/i);
    expect(header).toBeInTheDocument();
  });

  it('2 - Testa se a página contém um heading h2 com o texto To do', () => {
    const { getByRole } = renderWithRouter(<App />);
    const title = getByRole('heading', { name: 'To Do' });
    expect(title).toBeInTheDocument();
  });

  it('3 - Testa o input', () => {
    const { getByTestId, getByText } = renderWithRouter(<App />);
    const inputName = getByTestId('input-activity');
    const buttonSubmit = getByTestId('btn-submit');
    expect(inputName).toHaveValue('');
    
    fireEvent.change(inputName, { target: { value: 'Fazer compras' } });
    fireEvent.click(buttonSubmit);
    const activity = getByText(/Fazer compras/i);
    expect(activity).toBeInTheDocument();
    
    fireEvent.change(inputName, { target: { value: 'Correr no parque' } });
    fireEvent.click(buttonSubmit);
    const activity2 = getByText(/Correr no parque/i);
    expect(activity2).toBeInTheDocument();
  });

  it('4 - Testa o botão delete na pagina "To do"', () => {
    const { getByTestId, getByText } = renderWithRouter(<App />);
    const inputName = getByTestId('input-activity');
    const buttonSubmit = getByTestId('btn-submit');
    expect(inputName).toHaveValue('');
    
    fireEvent.change(inputName, { target: { value: 'Atividade1' } });
    fireEvent.click(buttonSubmit);
    const activity = getByText(/Atividade1/i);
    expect(activity).toBeInTheDocument();

    const deleteButton = getByTestId('delete-Atividade1');
    fireEvent.click(deleteButton);
    
    expect(activity).not.toBeInTheDocument();
  });

  it('5 - Testa o botão start da página To Do e verifica tarefa em andamento', () => {
    const { getByTestId, getByText, getByRole } = renderWithRouter(<App />);
    const inputName = getByTestId('input-activity');
    const buttonSubmit = getByTestId('btn-submit');
    expect(inputName).toHaveValue('');

    fireEvent.change(inputName, { target: { value: 'Atividade1' } });
    fireEvent.click(buttonSubmit);
    const activity = getByText(/Atividade1/i);
    expect(activity).toBeInTheDocument();

    const sendButton = getByTestId('inProgress-Atividade1');
    expect(sendButton).toBeInTheDocument();
    fireEvent.click(sendButton);
    expect(activity).not.toBeInTheDocument();

    const inProgressButton = getByTestId('inprogress-btn');
    expect(inProgressButton).toBeInTheDocument()
    fireEvent.click(inProgressButton);
    const title = getByRole('heading', { name: 'In Progress' });
    expect(title).toBeInTheDocument();
    const activity2 = getByText(/Atividade1/i);
    expect(activity2).toBeInTheDocument();
    
  });

  it('6 - Testa o botão Done da página In Progress e verifica tarefa feita', () => {
    const { getByTestId, getByText, getByRole } = renderWithRouter(<App />);
    const inputName = getByTestId('input-activity');
    const buttonSubmit = getByTestId('btn-submit');
    expect(inputName).toHaveValue('');

    fireEvent.change(inputName, { target: { value: 'Atividade1' } });
    fireEvent.click(buttonSubmit);
    const activity = getByText(/Atividade1/i);
    expect(activity).toBeInTheDocument();

    const sendButton = getByTestId('inProgress-Atividade1');
    expect(sendButton).toBeInTheDocument();
    fireEvent.click(sendButton);
    expect(activity).not.toBeInTheDocument();

    const inProgressButtonPage = getByTestId('inprogress-btn');
    expect(inProgressButtonPage).toBeInTheDocument();
    fireEvent.click(inProgressButtonPage);
    const title = getByRole('heading', { name: 'In Progress' });
    expect(title).toBeInTheDocument();
    const activity2 = getByText(/Atividade1/i);
    expect(activity2).toBeInTheDocument();

    const doneButton = getByTestId('done-Atividade1');
    expect(doneButton).toBeInTheDocument();
    fireEvent.click(doneButton);

    const doneButtonPage = getByTestId('done-btn');
    expect(doneButtonPage).toBeInTheDocument();
    fireEvent.click(doneButtonPage);
    const title2 = getByRole('heading', { name: 'Done' });
    expect(title2).toBeInTheDocument();
    const activity3 = getByText(/Atividade1/i);
    expect(activity3).toBeInTheDocument();
    

  })
});
