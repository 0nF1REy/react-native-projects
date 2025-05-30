import React from "react";
import {
  PostBox,
  TextInputArea,
  RowBottom,
  AttachButton,
  SendButton,
  AttachText,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const PostCreatorComponent = ({
  value,
  onChangeText,
  onAttachPress,
  onSendPress,
  attachText,
}) => {
  return (
    <PostBox>
      <TextInputArea
        placeholder="Escreva algo"
        value={value}
        onChangeText={onChangeText}
        multiline
      />

      <RowBottom>
        <AttachButton onPress={onAttachPress}>
          <AttachText>{attachText}</AttachText>
        </AttachButton>

        <SendButton onPress={onSendPress}>
          <FontAwesomeIcon icon={faPaperPlane} size={20} color="#fff" />
        </SendButton>
      </RowBottom>
    </PostBox>
  );
};

export default PostCreatorComponent;
