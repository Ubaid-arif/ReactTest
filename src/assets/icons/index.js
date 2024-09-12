import React from "react";

const Icon = ({ name, fill, height, width, viewBox, onClick }) => {
  return (
    <svg
      fill={fill || "#3B0C36"}
      height={height || "20"}
      width={width || "20"}
      viewBox={viewBox || "0 0 20 22"}
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      {name === "callIcon" ? (
        <>
          <path d="M15.7918 12.3897C15.3823 11.9633 14.8884 11.7354 14.365 11.7354C13.8458 11.7354 13.3477 11.9591 12.9214 12.3855L11.5875 13.7151C11.4778 13.656 11.368 13.6011 11.2625 13.5463C11.1105 13.4703 10.967 13.3985 10.8446 13.3225C9.59513 12.529 8.45965 11.4948 7.37059 10.1567C6.84295 9.48975 6.48837 8.92834 6.23089 8.35849C6.57702 8.0419 6.89783 7.71266 7.21019 7.39607C7.32838 7.27788 7.44657 7.15546 7.56477 7.03727C8.4512 6.15083 8.4512 5.00268 7.56477 4.11625L6.41239 2.96387C6.28154 2.83302 6.14646 2.69794 6.01983 2.56287C5.76656 2.30116 5.50063 2.031 5.22625 1.77773C4.8168 1.3725 4.32715 1.15723 3.81217 1.15723C3.29719 1.15723 2.7991 1.3725 2.37699 1.77773C2.37276 1.78196 2.37276 1.78196 2.36854 1.78618L0.933356 3.23403C0.393051 3.77433 0.0849076 4.43283 0.0173694 5.19686C-0.083938 6.42943 0.27908 7.57758 0.557675 8.32894C1.2415 10.1736 2.26302 11.8831 3.78685 13.7151C5.6357 15.9228 7.86025 17.6661 10.4014 18.8945C11.3722 19.3546 12.6681 19.8991 14.116 19.9919C14.2046 19.9962 14.2975 20.0004 14.3819 20.0004C15.357 20.0004 16.1759 19.65 16.8175 18.9535C16.8217 18.9451 16.8302 18.9409 16.8344 18.9324C17.0539 18.6665 17.3072 18.4259 17.5731 18.1684C17.7546 17.9953 17.9403 17.8138 18.1218 17.6239C18.5397 17.1891 18.7592 16.6826 18.7592 16.1634C18.7592 15.64 18.5355 15.1376 18.1092 14.7155L15.7918 12.3897ZM17.3029 16.8345C17.2987 16.8345 17.2987 16.8388 17.3029 16.8345C17.1383 17.0118 16.9695 17.1722 16.788 17.3495C16.5136 17.6112 16.235 17.8856 15.9733 18.1937C15.5469 18.6496 15.0446 18.8649 14.3861 18.8649C14.3228 18.8649 14.2553 18.8649 14.192 18.8607C12.9383 18.7805 11.7732 18.2908 10.8995 17.8729C8.5103 16.7163 6.41239 15.0743 4.66906 12.9933C3.22966 11.2584 2.26724 9.65438 1.62984 7.93215C1.23728 6.88109 1.09376 6.06219 1.15708 5.28972C1.19929 4.79585 1.38924 4.3864 1.73959 4.03604L3.179 2.59663C3.38584 2.40246 3.60534 2.29693 3.82062 2.29693C4.08655 2.29693 4.30183 2.45734 4.4369 2.59241C4.44112 2.59663 4.44534 2.60086 4.44956 2.60508C4.70705 2.84568 4.95188 3.09473 5.20937 3.36066C5.34023 3.49574 5.4753 3.63081 5.61038 3.77011L6.76275 4.92248C7.21019 5.36992 7.21019 5.7836 6.76275 6.23104C6.64034 6.35345 6.52214 6.47586 6.39973 6.59405C6.04516 6.95707 5.70746 7.29476 5.34023 7.62401C5.33178 7.63245 5.32334 7.63667 5.31912 7.64512C4.9561 8.00814 5.02364 8.36271 5.09962 8.60332C5.10384 8.61598 5.10806 8.62864 5.11228 8.64131C5.41198 9.36734 5.8341 10.0512 6.47571 10.8658L6.47993 10.8701C7.64497 12.3053 8.87332 13.4239 10.2283 14.2807C10.4014 14.3905 10.5787 14.4791 10.7475 14.5636C10.8995 14.6395 11.043 14.7113 11.1654 14.7873C11.1823 14.7957 11.1992 14.8084 11.2161 14.8168C11.3596 14.8886 11.4946 14.9224 11.6339 14.9224C11.9843 14.9224 12.2038 14.7029 12.2756 14.6311L13.7192 13.1875C13.8627 13.044 14.0906 12.8709 14.3566 12.8709C14.6183 12.8709 14.8336 13.0355 14.9644 13.179C14.9686 13.1833 14.9686 13.1833 14.9729 13.1875L17.2987 15.5133C17.7335 15.9439 17.7335 16.3871 17.3029 16.8345Z" />
          <path d="M10.7938 4.75741C11.8997 4.94314 12.9043 5.46656 13.7064 6.26857C14.5084 7.07059 15.0276 8.07522 15.2175 9.18116C15.264 9.45975 15.5046 9.65393 15.7789 9.65393C15.8127 9.65393 15.8423 9.6497 15.876 9.64548C16.1884 9.59483 16.3952 9.29935 16.3446 8.98699C16.1166 7.64889 15.4835 6.42898 14.5168 5.46234C13.5502 4.49569 12.3303 3.86252 10.9922 3.63458C10.6798 3.58393 10.3885 3.79076 10.3337 4.09891C10.2788 4.40705 10.4814 4.70675 10.7938 4.75741Z" />
          <path d="M19.9622 8.82242C19.5865 6.61899 18.5481 4.61395 16.9525 3.01836C15.3569 1.42277 13.3519 0.384369 11.1485 0.00868773C10.8403 -0.0461871 10.5491 0.16487 10.4942 0.473013C10.4435 0.785377 10.6504 1.07664 10.9627 1.13151C12.9298 1.46498 14.7238 2.39785 16.1505 3.82038C17.5773 5.24712 18.5059 7.0411 18.8394 9.00815C18.8858 9.28675 19.1264 9.48092 19.4008 9.48092C19.4346 9.48092 19.4641 9.4767 19.4979 9.47248C19.806 9.42605 20.0171 9.13057 19.9622 8.82242Z" />
        </>
      ) : name === "facebookIcon" ? (
        <>
          <path
            d="M24.371 31.1036L24.371 24.1937H26.6894L27.0372 21.5H24.371V19.7805C24.371 19.0008 24.5866 18.4695 25.7059 18.4695L27.1311 18.4689V16.0596C26.8846 16.0275 26.0386 15.9541 25.0538 15.9541C22.9976 15.9541 21.5899 17.2092 21.5899 19.5137V21.5H19.2644V24.1937H21.5899L21.5899 31.1036H24.371Z"
            fill=""
          />
        </>
      ) : name === "instaIcon" ? (
        <>
          <path
            d="M24.2632 23.6508C24.2632 24.3979 23.6574 25.0037 22.9103 25.0037C22.1631 25.0037 21.5574 24.3979 21.5574 23.6508C21.5574 22.9036 22.1631 22.2979 22.9103 22.2979C23.6574 22.2979 24.2632 22.9036 24.2632 23.6508Z"
            fill=""
          />
          <path
            d="M25.1952 19.5615H20.6254C19.6307 19.5615 18.8215 20.3707 18.8215 21.3654V25.9352C18.8215 26.9299 19.6307 27.7391 20.6254 27.7391H25.1952C26.1899 27.7391 26.9991 26.9299 26.9991 25.9352V21.3654C26.9991 20.3707 26.1899 19.5615 25.1952 19.5615ZM22.9103 25.9051C21.667 25.9051 20.6555 24.8936 20.6555 23.6503C20.6555 22.407 21.667 21.3955 22.9103 21.3955C24.1536 21.3955 25.1652 22.407 25.1652 23.6503C25.1652 24.8936 24.1536 25.9051 22.9103 25.9051ZM25.4959 21.5157C25.2468 21.5157 25.0449 21.3138 25.0449 21.0648C25.0449 20.8157 25.2468 20.6138 25.4959 20.6138C25.745 20.6138 25.9468 20.8157 25.9468 21.0648C25.9468 21.3138 25.745 21.5157 25.4959 21.5157Z"
            fill=""
          />
          <path
            d="M26.5482 15.9541L19.2726 15.9541C17.0347 15.9541 15.2139 17.7749 15.2139 20.0128L15.2139 27.2884C15.2139 29.5264 17.0347 31.3472 19.2726 31.3472H26.5482C28.7861 31.3472 30.6069 29.5264 30.6069 27.2884V20.0128C30.6069 17.7749 28.7861 15.9541 26.5482 15.9541ZM27.9011 25.9355C27.9011 27.4275 26.6873 28.6413 25.1953 28.6413H20.6255C19.1335 28.6413 17.9197 27.4275 17.9197 25.9355V21.3657C17.9197 19.8738 19.1335 18.6599 20.6255 18.6599H25.1953C26.6873 18.6599 27.9011 19.8738 27.9011 21.3657V25.9355Z"
            fill=""
          />
        </>
      ) : name === "LinkindIcon" ? (
        <>
          <path
            d="M30.4061 31.3752V25.7968C30.4061 23.0552 29.8159 20.9609 26.6174 20.9609C25.0752 20.9609 24.0471 21.7987 23.6283 22.5983H23.5902V21.2084H20.563V31.3752H23.7235V26.3299C23.7235 24.9972 23.971 23.7216 25.6083 23.7216C27.2266 23.7216 27.2457 25.2257 27.2457 26.4061V31.3562H30.4061V31.3752Z"
            fill=""
          />
          <path
            d="M15.4226 21.208H18.5831V31.3748H15.4226L15.4226 21.208Z"
            fill=""
          />
          <path
            d="M17.0028 16.1436C15.9937 16.1436 15.175 16.9622 15.175 17.9713C15.175 18.9804 15.9937 19.8181 17.0028 19.8181C18.0119 19.8181 18.8305 18.9804 18.8305 17.9713C18.8305 16.9622 18.0119 16.1436 17.0028 16.1436Z"
            fill=""
          />
        </>
      ) : null}
    </svg>
  );
};

export default Icon;
