import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Markdown = ({ content }) => {
  return (
    <ReactMarkdown
      rehypePlugins={[remarkGfm, rehypeRaw]}
      components={{
        code({ inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              style={vscDarkPlus}
              language={match[1]}
              PreTag="div"
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <S_Code className={className} {...props}>
              {children}
            </S_Code>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default Markdown;

const S_Code = styled.code`
  border-radius: 6px;
  padding: 0.2em 0.4em;
  font-size: 85%;
`;
