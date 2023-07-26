import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
// import PostComment from '.';

// describe('Teste para o componente PostComment', () => {
//     it('Deve renderizar o componente corretamente', () => {
//         render(<PostComment/>);
//         expect(screen.getByText('Comentar')).toBeInTheDocument();
//     });
// });

describe('Teste para o componente Post', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<Post />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentários corretamente', () => {
        render(<Post />);

        // Encontra o elemento do textarea e o botão de envio
        const textareaElement = screen.getByRole('textbox');
        const submitButton = screen.getByText('Comentar');

        // Digita e envia o primeiro comentário
        fireEvent.change(textareaElement, { target: { value: 'Comentário 1' } });
        fireEvent.click(submitButton);

        // Digita e envia o segundo comentário
        fireEvent.change(textareaElement, { target: { value: 'Comentário 2' } });
        fireEvent.click(submitButton);

        // Verifica se os comentários foram renderizados corretamente usando o atributo key (id)
        expect(screen.getByText('Comentário 1')).toBeInTheDocument();
        expect(screen.getByText('Comentário 2')).toBeInTheDocument();
    });
});